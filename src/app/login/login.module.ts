import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from '../routing/login.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MatCardModule, MatDividerModule, MatIconModule, MatListModule} from '@angular/material';
import {UserService} from '../service/user.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatCardModule,
    NgZorroAntdModule,
  ],
  providers: [UserService],
  declarations: [LoginComponent]
})
// 关于我
export class LoginModule {
}

