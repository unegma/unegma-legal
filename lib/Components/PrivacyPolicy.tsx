import privacy from "../legal-docs/privacy.md";
import * as React from 'react';
import {MDTemplate} from "./MDTemplate";

export function PrivacyPolicy(props: any) {
  return <MDTemplate md={privacy} {...props} />;
}
