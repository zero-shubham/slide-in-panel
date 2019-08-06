# Slide-in Panel Component

This component helps to implement “slide in/out on touch” feature for all devices with touch screens.


## Props accepted :



*   Threshold - This prop helps to control the sensitivity of the touch drag on which the panel should slide in/out. Default is 40.
*   containerStyle - This prop allows to pass on styles to Container component, overwriting the default.
*   canvasStyle - This prop allows to pass on styles to Canvas component, overwriting the default.
*   panelStyle - This prop allows to pass on styles to Panel component, overwriting the default.
*   canvas - This is the component that is rendered as child component to Container.
*   panel - This is the component that is rendered as child component to Container and which slides in and out, on touch drag. 

The default format of the canvas and panel may not suit all, you may fork the source code and edit style.css for Container component and get results of your preference. 

Also in the github repository you’ll find a use-case demo.
