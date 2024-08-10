import { Component } from '@angular/core';
import { IQuestion } from '../../types/IQuestion';
import { FAQ_ARRAY } from '../../mocks/faq-list.mock';
import { AccordionComponent } from '../../../../shared/components/accordion/accordion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-list',
  standalone: true,
  imports: [AccordionComponent, CommonModule],
  templateUrl: './faq-list.component.html',
  styleUrl: './faq-list.component.css'
})
export class FaqListComponent {
  public faqList: IQuestion[] = FAQ_ARRAY;
}
