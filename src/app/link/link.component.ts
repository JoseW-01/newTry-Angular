import { Component , OnInit, Input, HostBinding} from '@angular/core';
import { Link } from './link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @HostBinding('attr.class') cssclass = 'row'; 
    
  @Input() link: Link;
  constructor(){
    this.link = new Link("title", "link", 0 ); Link; 
  }

  ngOnInit(): void {
    
  }

}
