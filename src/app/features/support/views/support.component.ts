import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FaqListComponent } from '../containers/faq-list/faq-list.component';
import { ContactComponent } from '../containers/contact/contact.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FaqListComponent, ContactComponent, HeaderComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SupportComponent {
  
}
