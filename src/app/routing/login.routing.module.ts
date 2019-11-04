import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// 关于我 路由配置
export class LoginRoutingModule {
}
