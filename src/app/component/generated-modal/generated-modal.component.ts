import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-generated-modal',
  templateUrl: './generated-modal.component.html',
  styleUrls: ['./generated-modal.component.scss'],
})
export class GeneratedModalComponent {
  @Input() showGeneratedModal: boolean = false;
}
