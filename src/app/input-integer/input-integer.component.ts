import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  changeInput(event: { key: string; preventDefault: () => void; }): void {
    // Permitir solo números
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
      this.quantityChange.emit(this.quantity);
    }

  }

  downMethod(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }

  }
  upMethod(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
}
