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
    const keysExtra = ['Backspace']; // Teclas adicionales permitidas

    const valorInput = parseInt(this.quantity.toString() + event.key, 10); // Simula el nuevo valor del campo de entrada concatenando el primer numero seleccionado con el siguiente.

    // Permitir solo números y dentro del stock maximo
    if ((!/[0-9]/.test(event.key) && !keysExtra.includes(event.key)) || (valorInput > this.max)) {
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
