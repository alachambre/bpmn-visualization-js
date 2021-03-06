/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { parse } from 'fast-xml-parser/src/parser';
import { decodeXML } from 'entities/lib/decode';
import { BpmnJsonModel } from '../../../model/bpmn/json/BPMN20';

/**
 * Parse bpmn xml source
 */
export default class BpmnXmlParser {
  private options = {
    attributeNamePrefix: '', // default to '@_'
    ignoreNameSpace: true,
    ignoreAttributes: false,
    parseAttributeValue: true, // ensure numbers are parsed as number, not as string
    attrValueProcessor: (val: string) => {
      return decodeXML(val);
    },
  };

  // disable eslint as it comes from 3rd party
  public parse(xml: string): BpmnJsonModel {
    return parse(xml, this.options);
  }
}
