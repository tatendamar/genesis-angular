import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../service/layout.service';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MenuitemComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/'],
          },
        ],
      },
      {
        items: [
          {
            label: 'Enquiries',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/enquiries'],
          },
        ],
      },
      //   {
      //       label: 'Hierarchy',
      //       items: [
      //           {
      //               label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
      //               items: [
      //                   {
      //                       label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
      //                       items: [
      //                           { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
      //                           { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
      //                           { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
      //                       ]
      //                   },
      //                   {
      //                       label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
      //                       items: [
      //                           { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
      //                       ]
      //                   },
      //               ]
      //           },
      //           {
      //               label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
      //               items: [
      //                   {
      //                       label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
      //                       items: [
      //                           { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
      //                           { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
      //                       ]
      //                   },
      //                   {
      //                       label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
      //                       items: [
      //                           { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
      //                       ]
      //                   },
      //               ]
      //           }
      //       ]
      //   }
    ];
  }
}
