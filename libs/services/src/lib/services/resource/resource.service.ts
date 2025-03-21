import {
  httpResource,
  HttpResourceOptions,
  HttpResourceRef,
  HttpResourceRequest,
} from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';

export interface ResourceOptions
  extends Partial<HttpResourceOptions<unknown, unknown>> {
  params?: Record<
    string,
    string | number | boolean | readonly (string | number | boolean)[]
  >;
  headers?: Record<string, string>;
  body?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class ResourceService<T, R> {
  getById(
    url: string,
    id: Signal<string | number>,
    options?: ResourceOptions
  ): HttpResourceRef<T | undefined> {
    return httpResource<T>(() => {
      const request: HttpResourceRequest = {
        url: id() ? `${url}/${id()}` : url,
        params: options?.params,
        headers: options?.headers,
        body: options?.body,
      };
      return request;
    });
  }

  getAll(url: string): HttpResourceRef<R[] | undefined> {
    return httpResource<R[]>(() => ({ url }));
  }
}
