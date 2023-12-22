<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  position: relative;
  margin-left: 30px;
}

.details {
  flex: 1;
  margin-left: 1em;
  padding-left: 1em;
  margin-bottom: 1em;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 0.5em;
  color: var(--color-heading);
}

@media (max-width: 1000px) {
  .item {
    margin-left: 0;

    i {
      width: 50px;
      height: 50px;
    }
  }
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0 0 0 calc(var(--section-gap) / 2);

    &:hover {
      i {
        transform: scale(1.5);
      }
    }
  }

  i {
    transition: transform 200ms;
    top: calc(50% - 25px);
    left: 0px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item {
    &:before {
      content: ' ';
      z-index: -1;
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 26px;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }

    &:hover {
      &:before {
        border-left: 1px solid rgba(79, 192, 141, 0.9);
      }
    }
  }

  .item {
    &:after {
      content: ' ';
      z-index: -1;
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 26px;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }

    &:hover {
      &:after {
        border-left: 1px solid rgba(79, 192, 141, 0.5);
      }
    }
  }

  // .item:first-of-type:before {
  //   display: none;
  // }

  // .item:last-of-type:after {
  //   display: none;
  // }
}
</style>
