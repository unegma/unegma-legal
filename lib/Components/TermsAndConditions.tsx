import termsUC from "../legal-docs/terms-unegmacom.md";
import termsUD from "../legal-docs/terms-unegmadigital.md";
import termsUS from "../legal-docs/terms-unegmaservices.md";
import termsUV from "../legal-docs/terms-unegmaventures.md";
import * as React from 'react';
import {MDTemplate} from "./MDTemplate";

export function TermsUC(props: any) {
  return <MDTemplate md={termsUC} {...props} />;
}
export function TermsUD(props: any) {
  return <MDTemplate md={termsUD} {...props} />;
}
export function TermsUS(props: any) {
  return <MDTemplate md={termsUS} {...props} />;
}
export function TermsUV(props: any) {
  return <MDTemplate md={termsUV} {...props} />;
}
