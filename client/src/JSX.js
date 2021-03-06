import React from 'react';
import { FormGroup, ControlLabel, FormControl, FieldGroup } from 'react-bootstrap';

export let linkTextInput;
export let linkUrlInput;
export let imageUrlInput;
export let imageAltTextInput;
export let tableRowInput;
export let tableColInput;
export let repoModalGithubSelect;
export let repoModalGithubInput;
export let repos;

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

export const tableModalJSX = (
  <form>
    <FormGroup controlId="table-modal-rows">
      <ControlLabel>No. of rows:</ControlLabel>
      <FormControl inputRef={inst => {tableRowInput = inst}} type="text" />
    </FormGroup>
    <FormGroup controlId="table-modal-cols">
      <ControlLabel>No. of Columns:</ControlLabel>
      <FormControl inputRef={inst => {tableColInput = inst}} type="text" />
    </FormGroup>
  </form>
);

export const clearModalJSX = (
  <div>Are you sure you wish to clear all data?</div>
);

export const repoModalGithubJSX = (
  <FormGroup controlId="repo-modal-github">
    <FieldGroup
      id="repoModalGithubInput"
      type="text"
      label="Filename"
      placeholder="Enter Filename"
      inputRef={inst => {repoModalGithubInput = inst}}
    />
  <FormControl inputRef={inst => {repoModalGithubSelect = inst}} componentClass="select" placeholder="select">
      {
        repos &&
        repos.map((repo, index) => (
          <option value={index}>{repo}</option>
        ))
      }
      <option value="select">select</option>
    </FormControl>
  </FormGroup>
);
