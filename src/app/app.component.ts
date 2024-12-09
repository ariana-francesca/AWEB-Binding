import { Component, NgModule } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DatabindingDemoComponent } from './databinding-demo/databinding-demo.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingDemoComponent, DirectivesDemoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data_binding_activity';
}

