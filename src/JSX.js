import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export let linkTextInput;
export let linkUrlInput;
export let imageUrlInput;
export let imageAltTextInput;

export const linkModalJSX = (
  <form>
    <FormGroup controlId="link-modal-title">
      <ControlLabel>Title</ControlLabel>
      <FormControl inputRef={inst => {linkTextInput = inst}} type="text"/>
    </FormGroup>
    <FormGroup controlId="link-modal-url">
      <ControlLabel>URL</ControlLabel>
      <FormControl inputRef={inst => {linkUrlInput = inst}} type="text"/>
    </FormGroup>
  </form>
);

export const imageModalJSX = (
  <form>
    <FormGroup controlId="image-modal-title">
      <ControlLabel>Alternate Text</ControlLabel>
      <FormControl inputRef={inst => {imageAltTextInput = inst}} type="text" />
    </FormGroup>
    <FormGroup controlId="iamge-modal-url">
      <ControlLabel>Image URL</ControlLabel>
      <FormControl inputRef={inst => {imageUrlInput = inst}} type="text"/>
    </FormGroup>
  </form>
);

export const clearModalJSX = (
  <div>Are you sure you wish to clear all data?</div>
);
