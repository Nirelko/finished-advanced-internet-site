import Map from './map.model';
import empty from 'http-reject-empty';

export function index() {
  return Map.find({});
}