import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, map, Observable, switchMap, tap } from 'rxjs';
import { ApiResponse, Enquiry } from './enquiries.component';
import { EnquiriesService } from './service/enquiries.service';

type actionType = 'Look Up';

interface EnquiryState {
  enquiry: ApiResponse[];
  idEnquiry: ApiResponse;
  loading: boolean;
  errorMsg: HttpErrorResponse | null;
  action: actionType;
}

@Injectable()
export class EnquiryStore extends ComponentStore<EnquiryState> {
  private apiService = inject(EnquiriesService);

  constructor() {
    super({
      enquiry: [],
      idEnquiry: {} as ApiResponse,
      loading: false,
      errorMsg: null,
      action: 'Look Up',
    });
  }

  private readonly enquiry$ = this.select((state) => state.enquiry);
  private readonly enquiryId$ = this.select((state) => state.idEnquiry);
  private readonly loading$ = this.select((state) => state.loading);
  private readonly error$ = this.select((state) => state.errorMsg);
  private readonly action$ = this.select((state) => state.action);

  readonly vm$ = this.select({
    enquiry: this.enquiry$,
    enquiryId: this.enquiryId$,
    loading: this.loading$,
    error: this.error$,
    action: this.action$,
  });

  private readonly setLoading = this.updater((state) => ({
    ...state,
    loading: true,
  }));

  private readonly setError = this.updater(
    (state, error: HttpErrorResponse) => ({
      ...state,
      loading: false,
      errorMsg: error,
    })
  );

  private readonly addEnquiryToState = this.updater(
    (state, enquiry: ApiResponse[]) => ({
      ...state,
      loading: false,
      enquiry,
    })
  );

  private readonly addEnquiryIdToState = this.updater(
    (state, enquiry: ApiResponse) => ({
      ...state,
      loading: false,
      enquiry: state.enquiry,
    })
  );

  readonly loadEnquiries = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      tap((_) => this.setLoading()),
      switchMap(() =>
        this.apiService.getEnquiries().pipe(
          tap({
            next: (enquiry: ApiResponse[]) => this.addEnquiryToState(enquiry),
            error: (error: HttpErrorResponse) => this.setError(error),
          })
        )
      )
    );
  });

  readonly loadEnquiry = this.effect<any>(
    (params$: Observable<{ id: string }>) => {
      return params$.pipe(
        tap((_) => this.setLoading()),
        switchMap(({ id }) =>
          this.apiService.getEnquiriesById(id).pipe(
            tap({
              next: (id: ApiResponse) => this.addEnquiryIdToState(id),
              error: (error: HttpErrorResponse) => this.setError(error),
            })
          )
        )
      );
    }
  );
}
