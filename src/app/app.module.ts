import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { GenderPipe } from './pipes/gender.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './screens/admin/danh-muc/book-list/book-list.component';
import { BookDetailComponent } from './screens/admin/danh-muc/danh-sach/book-detail/book-detail.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './screens/admin/danh-muc/danh-sach/dashboard/dashboard.component';
import { DanhSachComponent } from './screens/admin/danh-muc/danh-sach/danh-sach.component';
import { AddComponent } from './screens/admin/danh-muc/add/add.component';
import { EditComponent } from './screens/admin/danh-muc/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroUnitComponent,
    HeroFormComponent,
    GenderPipe,
    BookListComponent,
    BookDetailComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    DanhSachComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
