/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WcHeatMap {
        "height": number;
        "width": number;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWcHeatMapElement extends Components.WcHeatMap, HTMLStencilElement {
    }
    var HTMLWcHeatMapElement: {
        prototype: HTMLWcHeatMapElement;
        new (): HTMLWcHeatMapElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "wc-heat-map": HTMLWcHeatMapElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WcHeatMap {
        "height"?: number;
        "width"?: number;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "wc-heat-map": WcHeatMap;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "wc-heat-map": LocalJSX.WcHeatMap & JSXBase.HTMLAttributes<HTMLWcHeatMapElement>;
        }
    }
}