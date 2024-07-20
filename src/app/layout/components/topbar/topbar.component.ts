import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../service/layout.service';
import { MenuItem, MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MenubarModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
  providers: [MessageService],
})
export class TopbarComponent implements OnInit {
  private messageService = inject(MessageService);
  loggedUser: any;

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.items = [
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: `${this.loggedUser}`,
            icon: 'pi pi-fw pi-user-plus',
            command: () => {},
          },
        ],
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-fw pi-power-off',
        command: () => {},
      },
    ];
  }
}
