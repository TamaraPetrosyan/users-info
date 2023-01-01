import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { HomeComponent } from './pages/home/home.component';
import { Route, RouterModule } from '@angular/router';
// import { AboutComponent } from './pages/about/about.component';
// import { Page404Component } from './pages/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './pages/table/table.component';
// import { LayoutComponent } from './pages/layout/layout.component';
// import { PostComponent } from './pages/post/post.component';
// import { CategoryComponent } from './pages/category/category.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip'; 
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
 
// const router: Route[] = [
//   // {
//   //   path: 'home',
//   //   // component: HomeComponent
//   //   loadChildren: ()=> import('./pages/home/home.module').then(m =>m.HomeModule)
//   // },
//   {
//     path: 'home',
//     component: HomeComponent
//     // redirectTo: 'home',
//     // pathMatch: 'full'
//   },
//   {
//     path: 'about',
//     component: AboutComponent
//   },
//   {
//     path:'admin',
//     component: LayoutComponent,
//     children:[
//       {
//         path: 'post',
//         component: PostComponent
//       },
//       {
//         path: 'category',
//         component: CategoryComponent
//       }
//     ]
//   },
//   {
//     path: '**',
//     component: Page404Component
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
   
    TableComponent,
   
  ],
  exports: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    
  ],
  providers: [BsModalService,
    BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }

