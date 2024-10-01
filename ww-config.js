export default {
  editor: {
    label: {
      en: "Dropdown",
    },
    icon: "view-grid",
  },
  properties: {
    elementTrigger: {
      hidden: true,
      defaultValue: {
        isWwObject: true,
        type: "DropdownTrigger",
      },
    },
    elementContent: {
      hidden: true,
      defaultValue: {
        isWwObject: true,
        type: "DropdownContent",
      },
    },
    defaultValue: {
      label: {
        en: "Default",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    disabled: {
      label: {
        en: "Disabled",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    teleport: {
      label: {
        en: "Teleport",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    modal: {
      label: {
        en: "Modal",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    triggerType: {
      label: {
        en: "Trigger",
      },
      type: "TextSelect",
      defaultValue: "click",
      options: {
        options: [
          { value: "click", label: { en: "Click" } },
          { value: "hover", label: { en: "Hover" } },
          { value: "right-click", label: { en: "Right click" } },
        ],
      },
    },
    position: {
      label: {
        en: "Position",
      },
      type: "TextSelect",
      defaultValue: "bottom",
      options: {
        options: [
          { value: "top", label: { en: "Top" } },
          { value: "right", label: { en: "Right" } },
          { value: "bottom", label: { en: "Bottom" } },
          { value: "left", label: { en: "Left" } },
        ],
      },
    },
  },
};
