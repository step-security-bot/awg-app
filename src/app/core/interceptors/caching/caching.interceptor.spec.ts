import {
    HTTP_INTERCEPTORS,
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Data } from '@angular/router';

import { throwError as observableThrowError } from 'rxjs';
import Spy = jasmine.Spy;

import { cleanStylesFromDOM } from '@testing/clean-up-helper';
import { expectSpyCall, expectToBe, expectToEqual } from '@testing/expect-helper';
import { getInterceptorInstance } from '@testing/interceptor-helper';
import { mockCache, mockConsole } from '@testing/mock-helper';

import { AppConfig } from '@awg-app/app.config';
import { HttpCacheService } from '@awg-core/services';

import { CachingInterceptor } from './caching.interceptor';

describe('CachingInterceptor (DONE)', () => {
    let cachingInterceptor: HttpInterceptor;
    let httpCacheService: HttpCacheService;

    let interceptSpy: Spy;
    let cacheGetSpy: Spy;
    let cachePutSpy: Spy;
    let consoleSpy: Spy;

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    const apiUrl = AppConfig.API_ENDPOINT;
    const searchRoute = 'search/';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HttpCacheService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: CachingInterceptor,
                    multi: true,
                },
            ],
        });

        // Inject services and http client handler
        httpCacheService = TestBed.inject(HttpCacheService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);

        // Uses helper function to get interceptor instance
        cachingInterceptor = getInterceptorInstance<CachingInterceptor>(
            TestBed.inject(HTTP_INTERCEPTORS),
            CachingInterceptor
        );

        // Spies on service functions
        interceptSpy = spyOn(cachingInterceptor, 'intercept').and.callThrough();
        cacheGetSpy = spyOn(httpCacheService, 'get').and.callFake(mockCache.get);
        cachePutSpy = spyOn(httpCacheService, 'put').and.callFake(mockCache.put);
        consoleSpy = spyOn(console, 'error').and.callFake(mockConsole.log);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests
        httpTestingController.verify();

        // Clear mock stores after each test
        (httpCacheService as any).cachedResponses = new Map<string, HttpResponse<any>>();
        mockCache.clear();
        mockConsole.clear();
    });

    afterAll(() => {
        cleanStylesFromDOM();
    });

    it('... should test if interceptor instance is created', () => {
        expect(cachingInterceptor).toBeTruthy();
    });

    describe('httpTestingController', () => {
        it('... should issue a mocked http get request', waitForAsync(() => {
            const testData: Data = { name: 'TestData' };

            httpClient.get<Data>('/foo/bar').subscribe({
                next: data => {
                    expectToEqual(data, testData);
                },
            });

            // Match the request url
            const call = httpTestingController.expectOne({
                url: '/foo/bar',
            });

            // Check for GET request
            expectToBe(call.request.method, 'GET');

            // Respond with mocked data
            call.flush(testData);
        }));
    });

    describe('mock test objects (self-test)', () => {
        // Prepare HTTP call
        const expectedUrl = '/foo/bar';
        const testData: Data = { name: 'TestData' };
        const expectedRequest = new HttpRequest('GET', expectedUrl);
        const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: testData });

        it('... should use mock cache', waitForAsync(() => {
            // Create cached response via cache service
            httpCacheService.put(expectedRequest, expectedResponse);

            // Expect cache.put to be called
            expectSpyCall(cachePutSpy, 1, 0);

            // Mock cache has created response
            expectToEqual(mockCache.get(expectedRequest), expectedResponse);
            // Spied service call returns created response
            expectToEqual(httpCacheService.get(expectedRequest), expectedResponse);
            // Real service does not have created response
            expect((httpCacheService as any)._cachedResponses.has(expectedRequest.urlWithParams)).toBeFalse();
        }));

        it('... should clear mock cache after each run', waitForAsync(() => {
            expect(mockCache.get(expectedRequest)).toBeNull();
            expect(httpCacheService.get(expectedRequest)).toBeNull();
        }));

        it('... should use mock console', () => {
            console.error('Test');

            expectToBe(mockConsole.get(0), 'Test');
        });

        it('... should clear mock console after each run', () => {
            expect(mockConsole.get(0)).toBeUndefined();
        });
    });

    describe('cachingInterceptor', () => {
        // Prepare HTTP call
        const expectedUrl = apiUrl + searchRoute + 'Test';
        const testData: Data = { name: 'TestData' };
        const expectedResponse = new HttpResponse({
            headers: new HttpHeaders(),
            status: 200,
            statusText: 'OK',
            url: expectedUrl,
            body: testData,
        });
        let call: TestRequest;

        it('... should intercept HTTP requests', waitForAsync(() => {
            // Subscribe to GET Http Request
            httpClient.get<Data>(expectedUrl).subscribe({
                next: data => {
                    expectToEqual(data, testData);
                },
            });

            // Expect an HTTP request
            call = httpTestingController.expectOne({
                url: expectedUrl,
            });

            expectSpyCall(interceptSpy, 1, call.request);
        }));

        describe('no GET request', () => {
            it('... should do nothing if POST request', waitForAsync(() => {
                // Subscribe to PUT Http Request
                httpClient.post<Data>(expectedUrl, testData).subscribe({
                    next: data => {
                        expectToEqual(data, testData);
                    },
                });

                // Expect an HTTP request
                call = httpTestingController.expectOne(expectedUrl);
                expectToEqual(call.request.method, 'POST');
                expectToEqual(call.request.url, expectedUrl);

                // Expect request to return the expected response after POST
                call.event(expectedResponse);

                expectSpyCall(interceptSpy, 1, call.request);
                expectSpyCall(cacheGetSpy, 0, call.request);
                expectSpyCall(cachePutSpy, 0, call.request);
            }));

            it('... should do nothing if PUT request', waitForAsync(() => {
                // Subscribe to PUT Http Request
                httpClient.put<Data>(expectedUrl, testData).subscribe({
                    next: data => {
                        expectToEqual(data, testData);
                    },
                });

                // Expect an HTTP request
                call = httpTestingController.expectOne(expectedUrl);
                expectToEqual(call.request.method, 'PUT');
                expectToEqual(call.request.url, expectedUrl);

                // Expect request to return the expected response after PUT
                call.event(expectedResponse);

                expectSpyCall(interceptSpy, 1, call.request);
                expectSpyCall(cacheGetSpy, 0, call.request);
                expectSpyCall(cachePutSpy, 0, call.request);
            }));
        });

        describe('GET request', () => {
            it('... should check for existing requests in cache via httpCacheService', waitForAsync(() => {
                const expectedRequest = new HttpRequest('GET', expectedUrl);

                // Mock cache is empty
                expect(mockCache.get(expectedRequest)).toBeNull();

                // Subscribe to GET Http Request
                const sub = httpClient.get<Data>(expectedUrl).subscribe({
                    next: data => {
                        expectToEqual(data, testData);
                    },
                });

                // Expect an HTTP request
                call = httpTestingController.expectOne({
                    url: expectedUrl,
                });

                // Resolve request
                call.event(expectedResponse);

                // Make sure real request and expectedRequest are identical
                expectToBe(call.request.method, expectedRequest.method);
                expectToBe(call.request.urlWithParams, expectedRequest.urlWithParams);
                expectToBe(call.request.responseType, expectedRequest.responseType);
                expectToEqual(call.request.headers, expectedRequest.headers);

                // Expect spy calls
                expectSpyCall(interceptSpy, 1, call.request);
                expectSpyCall(cacheGetSpy, 1, call.request);
                expectSpyCall(cachePutSpy, 1, call.request);

                // Mock cache has created response
                expectToEqual(mockCache.get(expectedRequest), expectedResponse);

                // Unsubscribe from first request
                sub.unsubscribe();

                // ----------------------
                // Subscribe to new GET Http Request
                httpClient.get<Data>(expectedUrl).subscribe({
                    next: data => {
                        expectToEqual(data, testData);
                    },
                });

                // Expect not an HTTP request, since response is delivered from cache
                httpTestingController.expectNone({
                    url: expectedUrl,
                });

                // Expect spy calls
                expectSpyCall(interceptSpy, 2, call.request);
                // Should get cache
                expectSpyCall(cacheGetSpy, 2, call.request);
                // Should not have put response to cache again (still 1)
                expectSpyCall(cachePutSpy, 1, call.request);

                // Mock cache still has response
                expectToEqual(mockCache.get(expectedRequest), expectedResponse);
            }));

            it('... should put new requests to cache via httpCacheService', waitForAsync(() => {
                const expectedRequest = new HttpRequest('GET', expectedUrl);

                // No cached response in cache
                expect(mockCache.get(expectedRequest)).toBeNull();

                // Subscribe to GET Http Request
                httpClient.get<Data>(expectedUrl).subscribe({
                    next: data => {
                        expectToEqual(data, testData);
                    },
                });

                // Expect an HTTP request
                call = httpTestingController.expectOne({
                    url: expectedUrl,
                });

                // Resolve request
                call.flush(testData);

                // Expect spy calls
                expectSpyCall(interceptSpy, 1, call.request);
                expectSpyCall(cacheGetSpy, 1, call.request);
                expectSpyCall(cachePutSpy, 1, call.request);

                // Make sure real request and expectedRequest are identical
                expectToBe(call.request.method, expectedRequest.method);
                expectToBe(call.request.urlWithParams, expectedRequest.urlWithParams);
                expectToBe(call.request.responseType, expectedRequest.responseType);
                expectToEqual(call.request.headers, expectedRequest.headers);

                // Expect new cached response
                expect(mockCache.get(expectedRequest)).toBeTruthy();
                expectToEqual(mockCache.get(expectedRequest), expectedResponse);
            }));

            it('... should throw an error and log to console if request fails with HttpErrorResponse', waitForAsync(() => {
                // Spy on HTTP handler to handle another response
                const httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
                const expectedError = new HttpErrorResponse({
                    status: 401,
                    statusText: 'error',
                    url: expectedUrl,
                });
                httpHandlerSpy.handle.and.returnValue(observableThrowError(() => expectedError));

                // Set log message and spy on console
                const expectedLogMessage = 'CachingInterceptor: Processing http error';

                expectSpyCall(consoleSpy, 0);
                expect(mockConsole.get(0)).toBeUndefined();

                // Subscribe to GET Http Request
                httpClient.get<Data>(expectedUrl).subscribe({
                    next: data => {
                        expectToEqual(data, testData);
                    },
                });

                // Expect an HTTP request
                call = httpTestingController.expectOne({
                    url: expectedUrl,
                });

                // Expecting spy calls
                expectSpyCall(interceptSpy, 1, call.request);
                expectSpyCall(cacheGetSpy, 1, call.request);

                // Add another request to the stack
                cachingInterceptor.intercept(call.request, httpHandlerSpy).subscribe({
                    next: () => fail('should have been failed'),
                    error: err => {
                        expectToEqual(err, expectedError);
                    },
                    complete: () => {
                        fail('should have been failed');
                    },
                });

                expectSpyCall(cachePutSpy, 0);
                expectSpyCall(consoleSpy, 1, expectedLogMessage);
                expectToBe(mockConsole.get(0), expectedLogMessage);
            }));

            it('... should throw an error, but not log to console if request fails with another error', waitForAsync(() => {
                // Spy on HTTP handler to handle another response
                const httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
                const expectedError = new Error('error');
                httpHandlerSpy.handle.and.returnValue(observableThrowError(() => expectedError));

                // Spy on console
                expectSpyCall(consoleSpy, 0);
                expect(mockConsole.get(0)).toBeUndefined();

                // Subscribe to GET Http Request
                httpClient.get<Data>(expectedUrl).subscribe({
                    next: data => {
                        expectToEqual(data, testData);
                    },
                });

                // Expect an HTTP request
                call = httpTestingController.expectOne({
                    url: expectedUrl,
                });

                // Expecting spy calls
                expectSpyCall(interceptSpy, 1, call.request);
                expectSpyCall(cacheGetSpy, 1, call.request);

                // Add another request to the stack
                cachingInterceptor.intercept(call.request, httpHandlerSpy).subscribe({
                    next: () => fail('should not call next'),
                    error: err => {
                        expectToEqual(err, expectedError);
                    },
                    complete: () => {
                        fail('should not complete');
                    },
                });

                expectSpyCall(cachePutSpy, 0);
                expectSpyCall(consoleSpy, 0);
                expect(mockConsole.get(0)).toBeUndefined();
            }));
        });
    });
});
