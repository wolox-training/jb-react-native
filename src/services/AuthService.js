import React, { Component } from 'react';
import {  browserHistory } from 'react-router-dom';

export function checkHeader() {
  return !!localStorage.getItem('isAuthenticated');
}

export function logout(history) {
  // localStorage.removeItem('isAuthenticated');
  // history.push("/login");
}
