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

  quantityInput: string = '';

  changeInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Validar que solo contenga números
    const numericValue = value.replace(/[^0-9]/g, '');

    // Actualizar el valor del input
    this.quantityInput = numericValue;
    input.value = numericValue;

    // Emitir el valor numérico
    if (numericValue) {
      this.quantityChange.emit(parseInt(numericValue, 10));
    } else {
      this.quantityChange.emit(0);
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


