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

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
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
})
export class EnquiriesComponent implements OnInit {
  private apiService = inject(EnquiriesService);
  allItems!: [];
  singleUser!: any;
  p!: number;

  visible: boolean = false;
  visible2: boolean = false;
  first!: number;

  rows!: number;

  constructor() {}

  ngOnInit() {
    this.apiService.getEnquiries().subscribe((data) => {
      this.allItems = data.data;
      console.log(data.data);
    });
  }

  showDetails(id: any) {
    this.visible = true;
    this.apiService.getEnquiriesById(id).subscribe((data) => {
      this.singleUser = data;
      console.log(data);
    });
  }

  deleteItem(id: any) {
    this.apiService.removeEnquiriesById(id).subscribe((data) => {
      console.log(data);
      return data;
    });
  }

  showDelete() {
    this.visible2 = true;
  }
}
