import Vue from "vue";

export const requiredRule = (messageKey: string) => (v: string) =>
  !!v?.trim() || Vue.prototype.$t(messageKey);

export const maxLengthRule =
  (max: number, messageKey?: string) => (v: string) =>
    v.length <= max ||
    Vue.prototype.$t(messageKey || "error.max_length", { max });

export const emailRule =
  (messageKey = "error.invalid_email") =>
  (v: string) =>
    /^\S+@\S+\.\S+$/.test(v) || Vue.prototype.$t(messageKey);
