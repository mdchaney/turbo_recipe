import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bob"
export default class extends Controller {
  connect() {
    this.element.textContent = 'Bob';
  }

  big_bob(ev) {
    this.set_font_size(this.element, x => x * 1.25);
  }

  small_bob(ev) {
    this.set_font_size(this.element, x => x * .9);
  }

  set_font_size(el, modifier) {
    const md = el.style.fontSize.match(/(\d+)([a-z]+)/);
    if (md) {
      var size = parseFloat(md[1]);
      const unit = md[2];
      size = Math.floor(modifier(size));
      el.style.fontSize = `${size}${unit}`;
    }
  }
}
