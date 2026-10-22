import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { initLenis, scrollTop } from '../utils/scroll.js';

export function useLenis() {
  useEffect(() => {
    initLenis();
  }, []);
}

export function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTop(true);
  }, [pathname]);
  return null;
}
