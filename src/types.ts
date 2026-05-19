/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Story {
  id: string;
  title: string;
  description: string;
  images: string[];
  liked: boolean;
  category: string;
}

export interface Category {
  name: string;
  icon: string;
}
