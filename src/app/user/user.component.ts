import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  isOnline = true;
  @Input() name = ""
  @Input() status = ""
  @Input() url = ""

}
