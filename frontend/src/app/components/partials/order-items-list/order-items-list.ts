import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'order-items-list',
  standalone: false,
  templateUrl: './order-items-list.html',
  styleUrl: './order-items-list.css'
})
export class OrderItemsList {
@Input()
  order!:Order;
}
