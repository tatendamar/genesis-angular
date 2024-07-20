import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnquiriesService } from './service/enquiries.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { EnquiryStore } from './enquiry.store';

export type ApiResponse = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  data: any[];
};

export type Enquiry = {
  dialingCode: null;
  email: string;
  firstName: string;
  id: number;
  isArchived: boolean;
  isMailed: boolean;
  lastName: string;
  listingId: number;
  markAsRead: boolean;
  message: string;
  ownedBy: string;
  phoneNumber: string;
};

@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    TagModule,
    RatingModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    NgxPaginationModule,
  ],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.scss',
  providers: [EnquiryStore],
})
export class EnquiriesComponent implements OnInit {
  private apiService = inject(EnquiriesService);
  allItems!: Enquiry[];
  singleUser!: Enquiry;
  p!: number;

  visible: boolean = false;
  visible2: boolean = false;
  first!: number;

  rows!: number;

  private enquiryStore = inject(EnquiryStore);
  vm$ = this.enquiryStore.vm$;

  constructor() {}

  ngOnInit() {
    this.enquiryStore.loadEnquiries();

    this.vm$.subscribe((data: any) => {
      this.allItems = data?.enquiry.data;
    });
  }

  showDetails(id: any) {
    this.visible = true;

    this.apiService.getEnquiriesById(id).subscribe((data) => {
      this.singleUser = data;
    
    });
  }

  deleteItem(id: any) {
    this.apiService.removeEnquiriesById(id).subscribe((data: any) => {
      console.log(data);
      return data;
    });
  }

  showDelete() {
    this.visible2 = true;
  }
}
