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

/**
 * Base name of the EventDefinition fields in the BPMN XSD. In the xsd, the value is <enum_value>EventDefinition
 *
 * For instance, TERMINATE --> terminateEventDefinition
 */
export enum ShapeBpmnEventKind {
  NONE = 'none',
  TERMINATE = 'terminate',
  CANCEL = 'cancel',
  COMPENSATION = 'compensate',
  CONDITIONAL = 'conditional',
  ERROR = 'error',
  ESCALATION = 'escalation',
  LINK = 'link',
  MESSAGE = 'message',
  SIGNAL = 'signal',
  TIMER = 'timer',
}

/**
 * List supported events in addition to the NONE event.
 *
 * Temporarily used until we support all events
 */
// TODO When a new kind is supported, uncomment the corresponding line in test/unit/component/parser/json/BpmnJsonParser.event.test.ts
export const supportedBpmnEventKinds = [
  ShapeBpmnEventKind.TERMINATE,
  ShapeBpmnEventKind.TIMER,
  ShapeBpmnEventKind.MESSAGE,
  ShapeBpmnEventKind.SIGNAL,
  ShapeBpmnEventKind.LINK,
  ShapeBpmnEventKind.ERROR,
  ShapeBpmnEventKind.COMPENSATION,
];
