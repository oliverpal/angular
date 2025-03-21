import {
  httpResource,
  HttpResourceOptions,
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
  getById<T>(
    url: string,
    id: Signal<string | number>,
    options?: ResourceOptions
  ) {
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

  getAll(url: string) {
    return httpResource<R[]>(() => ({ url }));
  }
}
