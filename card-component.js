class CardComponent extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Template for the card
    const template = document.createElement("template");
    template.innerHTML = `
      <link rel="stylesheet" href="card-component.css">
      <div class="card-component">
        <div class="card-header">
          <div class="card-header-content">
            <slot name="badge"></slot>
            <h2 class="card-title"><slot name="title">Card Title</slot></h2>
            <p class="card-subtitle"><slot name="subtitle">Card Subtitle</slot></p>
          </div>
          <div class="card-header-actions">
            <slot name="header-actions"></slot>
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-image">
            <div class="image"><slot name="image"></slot></div>
          </div>
          <div class="card-body-content">
            <slot name="content">This is the card body.</slot>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-footer-content">
            <slot name="footer-content"></slot>
          </div>
          <div class="card-footer-actions">
            <slot name="footer-actions"></slot>
          </div>
        </div>
      </div>
    `;

    // Append the template to the shadow DOM
    shadow.appendChild(template.content.cloneNode(true));
  }
}

// Define the new custom element
customElements.define("card-component", CardComponent);
