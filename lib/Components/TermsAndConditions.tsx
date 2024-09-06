import tscs from "../legal-docs/termsandconditions.md";
import * as React from 'react';
import {MDTemplate} from "./MDTemplate";

export function TermsAndConditions(props: any) {
  return <MDTemplate md={tscs} {...props} />;
}
