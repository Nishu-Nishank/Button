<template>
  <button
    class="button"
    :class="[
      shapeClass,
      sizeClass,
      colorClass,
      {
        hover: isHover,
        active: isActive,
        inactive: inactive,
        loading: isLoading,
      },
    ]"
    :disabled="isLoading || inactive"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
    @click="handleClick"
  >
    {{ content }}
    <span class="loader" v-if="isLoading"></span>
  </button>
</template>

<script>
export default {
  props: {
    shape: {
      type: String,
      default: "rounded", // Can be 'rounded', 'square', 'circle'
    },
    size: {
      type: String,
      default: "medium", // Can be 'small', 'medium', 'large'
    },
    color: {
      type: String,
      default: "primary", // Can be 'primary', 'secondary', 'success', 'warning', 'error'
    },
    inactive: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
    },
  },
  data() {
    return {
      isHover: false,
      isActive: false,
    };
  },
  computed: {
    shapeClass() {
      return `button-${this.shape}`;
    },
    sizeClass() {
      return `button-${this.size}`;
    },
    colorClass() {
      return `button-${this.color}`;
    },
  },
  methods: {
    handleClick() {
      if (!this.isLoading && !this.inactive) {
        this.isActive = true;
        setTimeout(() => {
          this.isActive = false;
        }, 200);
        this.$emit("click", this.content);
      }
    },
  },
};
</script>

<style lang="scss">
.button {
  cursor: pointer;
  color: #090909;
  display: inline-flex;
  width: 160px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}
.button-rounded {
  border-radius: 25px;
}

.button-square {
  border-radius: 0;
}

.button-circle {
  border-radius: 50%;
  padding: 14px;
}

.button-small {
  font-size: 14px;
  width: 140px;
  height: 40px;
}

.button-large {
  font-size: 20px;
  width: 180px;
  height: 60px;
}

.button-primary {
  background-color: #3490dc;
  color: #ffffff;
}

.button-secondary {
  background-color: #6574cd;
  color: #ffffff;
}

.button-success {
  background-color: #38c172;
  color: #ffffff;
}

.button-warning {
  background-color: #ff9800;
  color: #000000;
}

.button-error {
  background-color: #e74c3c;
  color: #ffffff;
}

.button:hover {
  transform: scale(1.1);
}

.button.active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.button.inactive {
  cursor: not-allowed;
  transform: scale(1) !important;
  opacity: 0.5;
}
.loading {
  cursor: not-allowed !important;
  transform: scale(1) !important;
  .loader {
    border-width: 4px;
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loader:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 15%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border-top: 2px solid #07d;
  border-right: 2px solid transparent;
  animation: spinner 0.6s linear infinite;
}
</style>
