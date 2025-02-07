import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CartComponent } from './Pages/cart/cart.component';
import { BrandsComponent } from './Pages/brands/brands.component';
import { DetailsComponent } from './Pages/details/details.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { authGuard } from './Core/Guards/Authenticate/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: 'home',component:HomeComponent,canActivate:[authGuard]},
    {path:'Products',component:ProductsComponent,canActivate:[authGuard]},
    {path:'Cart',component:CartComponent,canActivate:[authGuard]},
    {path:'Categories',component:CategoriesComponent,canActivate:[authGuard]},
    {path:'Brands',component:BrandsComponent,canActivate:[authGuard]},
    {path:'Product Details',component:DetailsComponent,canActivate:[authGuard]},
    {path:'login',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:'**',component:NotFoundComponent}
];
