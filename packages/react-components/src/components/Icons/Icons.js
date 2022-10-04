// https://github.com/react-icons/react-icons/issues/238
// SVJ => JSON using https://react-icons-json-generator.surge.sh/
import { GenIcon } from 'react-icons';

const clusterJson = { "tag": "svg", "attr": { "version": "1.1", "id": "Capa_1", "x": "0px", "y": "0px", "viewBox": "-202.4 314.1 200.8 201.2", "style": "enable-background:new -202.4 314.1 200.8 201.2;" }, "child": [{ "tag": "path", "attr": { "d": "M-35.7,469.5c8.6-10.4,14.7-22.9,17.7-36l14.6,3.3c-3.4,15.4-10.6,30-20.8,42.3L-35.7,469.5z M-40.5,334.9\n\tc-12.6-9.7-27.5-16.3-43-19.1l-2.7,14.8c13.2,2.4,25.9,8.1,36.6,16.3L-40.5,334.9z M-198.2,385.6l14.4,4.4\n\tc3.9-12.9,10.9-24.8,20.3-34.5l-10.8-10.4C-185.3,356.4-193.6,370.5-198.2,385.6z M-168.8,490c11.8,10.6,26.2,18.3,41.5,22.3\n\tl3.8-14.5c-13-3.4-25.2-10-35.3-19L-168.8,490z M-189.7,464l13.1-7.3c-6.6-11.7-10.3-25.1-10.8-38.6l-15,0.6\n\tC-201.9,434.5-197.4,450.2-189.7,464z M-140.7,338.5c12.1-6.2,25.2-9.4,39-9.4v-15c-15.9,0-31.7,3.8-45.8,11L-140.7,338.5z\n\t M-1.7,403.5c-1.8-15.7-7.3-31-16.1-44.3l-12.5,8.3c7.5,11.2,12.2,24.3,13.7,37.6L-1.7,403.5z M-94.2,515.3\n\tc15.8-1.2,31.3-6.2,44.8-14.4l-7.8-12.8c-11.5,7-24.7,11.3-38.1,12.3L-94.2,515.3z" }, "child": [] }, { "tag": "g", "attr": {}, "child": [{ "tag": "circle", "attr": { "cx": "-119.9", "cy": "451.9", "r": "27" }, "child": [] }, { "tag": "circle", "attr": { "cx": "-84.2", "cy": "377.5", "r": "27" }, "child": [] }] }] };
const cluster = GenIcon(clusterJson)
export const ClusterIcon = props => cluster(props);

const gbifLogoJson = { "tag": "svg", "attr": { "viewBox": "90 239.1 539.7 523.9" }, "child": [{ "tag": "path", "attr": { "d": "M325.5,495.4c0-89.7,43.8-167.4,174.2-167.4C499.6,417.9,440.5,495.4,325.5,495.4" }, "child": [] }, { "tag": "path", "attr": { "d": "M534.3,731c24.4,0,43.2-3.5,62.4-10.5c0-71-42.4-121.8-117.2-158.4c-57.2-28.7-127.7-43.6-192.1-43.6\n\tc28.2-84.6,7.6-189.7-19.7-247.4c-30.3,60.4-49.2,164-20.1,248.3c-57.1,4.2-102.4,29.1-121.6,61.9c-1.4,2.5-4.4,7.8-2.6,8.8\n\tc1.4,0.7,3.6-1.5,4.9-2.7c20.6-19.1,47.9-28.4,74.2-28.4c60.7,0,103.4,50.3,133.7,80.5C401.3,704.3,464.8,731.2,534.3,731" }, "child": [] }] };
const gbifLogo = GenIcon(gbifLogoJson)
export const GbifLogoIcon = props => gbifLogo(props);

const sampleEventJson = { "tag": "svg", "attr": { "version": "1.1", "id": "Layer_1", "x": "0px", "y": "0px", "viewBox": "0 0 35.7 35.7", "style": "enable-background:new 0 0 35.7 35.7;" }, "child": [{ "tag": "circle", "attr": { "cx": "17.6", "cy": "17.7", "r": "4.2" }, "child": [] }, { "tag": "path", "attr": { "d": "M3.4,3.6v28.3h28.3V3.6H3.4z M27.6,27.8H7.5V7.7h20.1V27.8z" }, "child": [] }] };
const sampleEvent = GenIcon(sampleEventJson)
export const SampleEventIcon = props => sampleEvent(props);

const pilarJson = {"tag":"svg","attr":{"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 222.77 222.77","style":"enable-background:new 0 0 222.77 222.77;"},"child":[{"tag":"path","attr":{"d":"M0,0v222.77h222.77V0H0z M81.11,158.96c-0.02,4.32-3.02,7.11-6.91,6.92c-4.1-0.2-6.65-2.53-6.68-6.61\n\tc-0.13-19.65-0.12-39.3-0.01-58.95c0.01-1.18,1.04-2.77,2.07-3.46c3.44-2.28,7.09-4.23,11.58-6.84\n\tC81.17,113.71,81.23,136.33,81.11,158.96z M105.86,181.5c-0.01,2.56-0.99,5.78-2.71,7.54c-3.6,3.69-9.75,1.28-10.7-3.83\n\tc-0.3-1.62-0.21-3.32-0.21-4.98c-0.01-29.99,0.12-59.98-0.13-89.97c-0.04-4.97,1.09-8.18,5.85-10.03c2.45-0.95,4.64-2.56,7.76-4.33\n\tc0.11,2.08,0.23,3.36,0.23,4.64C105.97,114.18,106.03,147.84,105.86,181.5z M130.63,201.05c0,7.43-2.04,10.66-6.7,10.78\n\tc-4.83,0.12-7.13-3.37-7.13-10.96c-0.01-39.78-0.01-79.56,0-119.34c0-1.61,0.14-3.23,0.24-5.38c13.6,6.59,13.6,6.59,13.6,20.53\n\tC130.64,131.47,130.64,166.26,130.63,201.05z M155.29,158.13c-0.01,4.89-2.49,7.66-6.56,7.79c-4.19,0.13-7.1-2.86-7.11-7.83\n\tc-0.07-22.32-0.03-44.64-0.03-68.09c4.54,2.64,8.35,4.61,11.86,7.04c1.06,0.73,1.77,2.7,1.78,4.11\n\tC155.35,120.14,155.35,139.14,155.29,158.13z M168.01,84.1c-0.93,2.23-3.54,3.76-5.41,5.62c-2.88-1.37-4.87-2.16-6.72-3.22\n\tc-13.26-7.61-26.6-15.1-39.67-23.02c-3.7-2.24-6.27-1.99-9.82,0.13c-13.26,7.95-26.71,15.57-40.11,23.27\n\tc-5.08,2.92-9.17,2.3-11.21-1.55c-1.97-3.72-0.48-7.38,4.3-10.16c16.25-9.42,32.48-18.87,48.84-28.07c1.61-0.9,4.56-1,6.13-0.12\n\tc16.66,9.36,33.15,19.03,49.73,28.54C167.55,77.5,169.56,80.38,168.01,84.1z M168.31,61.78c-6.03-3.17-11.85-6.75-17.75-10.16\n\tc-11.95-6.9-23.95-13.73-35.82-20.79c-2.51-1.49-4.32-1.4-6.76,0.03C91.62,40.46,75.19,49.9,58.77,59.38\n\tc-1.87,1.08-3.7,2.34-5.71,3.05c-4.11,1.45-7.6,0.24-9.97-3.43c-2.26-3.51-1.37-8.1,2-10.75c1.43-1.12,3.08-1.97,4.66-2.88\n\tc19.29-11.15,38.61-22.26,57.86-33.48c2.53-1.48,4.48-1.85,7.24-0.23c20.08,11.78,40.33,23.28,60.36,35.14\n\tc2.7,1.6,4.49,4.72,5.73,6.07C180.91,61.19,174.34,64.95,168.31,61.78z"},"child":[]}]};
const pilar = GenIcon(pilarJson)
export const PilarIcon = props => pilar(props);

const emptyInboxJson = {"tag":"svg","attr":{"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 371.37 383.45","style":"enable-background:new 0 0 371.37 383.45;"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.03,383.45c-9.01-3.26-12.51-9.81-11.98-19.18c0.35-6.22,0.03-12.47,0.08-18.71c0.03-4.34,2.2-6.94,5.63-6.95\n\t\tc3.42-0.01,5.55,2.59,5.57,6.95c0.03,6.99-0.01,13.97,0.02,20.96c0.02,4.53,1.21,5.7,5.81,5.7c112.4,0.01,224.8,0.01,337.2,0\n\t\tc4.36,0,5.65-1.23,5.65-5.49c0.02-26.45,0.02-52.89,0-79.34c0-4.31-1.29-5.63-5.54-5.63c-22.33-0.03-44.66,0.02-66.99-0.05\n\t\tc-3.06-0.01-4.78,1.26-6.05,3.95c-3.94,8.33-8.13,16.55-12.06,24.88c-3.28,6.94-8.49,10.24-16.27,10.23\n\t\tc-44.91-0.1-89.82-0.1-134.73,0c-7.76,0.02-13.03-3.19-16.32-10.15c-3.94-8.33-8.15-16.54-12.06-24.88\n\t\tc-1.34-2.86-3.2-4.05-6.38-4.04c-22.08,0.09-44.16,0.04-66.24,0.05c-4.81,0-6,1.18-6.01,5.92c-0.02,9.11,0.01,18.21-0.02,27.32\n\t\tc-0.01,4.52-1.93,6.98-5.4,7.08c-3.62,0.1-5.8-2.5-5.81-7.12C0.1,302.48,0.03,290,0.19,277.53c0.03-2.68,0.66-5.45,1.5-8.02\n\t\tc15.57-47.44,31.21-94.86,46.86-142.28c2.95-8.93,7.73-12.35,17.24-12.36c26.07-0.02,52.15,0.03,78.22-0.08\n\t\tc2.11-0.01,4.42-0.66,6.29-1.66c23.31-12.57,46.6-12.69,70.08-0.46c2.4,1.25,5.34,2.08,8.03,2.1c25.57,0.16,51.15,0.09,76.72,0.1\n\t\tc10.15,0,14.76,3.32,17.95,12.98c4.18,12.65,8.38,25.3,12.4,38c0.56,1.77,0.88,4.25,0.05,5.66c-0.89,1.51-3.18,2.78-5.01,3.01\n\t\tc-3.04,0.39-4.58-1.97-5.46-4.65c-3.53-10.77-7.07-21.53-10.6-32.3c-0.85-2.6-1.71-5.21-2.55-7.81c-0.91-2.8-2.81-3.92-6.28-3.44\n\t\tc0,1.36,0,2.68,0,3.99c0,16.59-0.03,33.18,0.04,49.78c0.01,1.96,0.26,4,0.86,5.86c8.86,27.1,17.84,54.17,26.65,81.29\n\t\tc0.85,2.61,2.03,3.44,4.71,3.36c6.59-0.2,13.18-0.06,20.24-0.06c-0.73-2.38-1.32-4.38-1.97-6.35\n\t\tc-7.1-21.52-14.21-43.04-21.31-64.57c-0.31-0.95-0.7-1.89-0.85-2.86c-0.48-3.09,0.56-5.46,3.64-6.51c3.08-1.05,5.36,0.17,6.81,2.95\n\t\tc0.51,0.98,0.84,2.08,1.19,3.14c8.03,24.36,16.1,48.71,24,73.12c1.02,3.14,1.54,6.58,1.55,9.88c0.12,28.32-0.12,56.64,0.18,84.95\n\t\tc0.1,9.35-3.02,15.91-12.02,19.18C243.58,383.45,127.8,383.45,12.03,383.45z M256.02,183.55c-0.27,1.18-0.53,2.13-0.69,3.09\n\t\tc-4.53,27.35-26.3,50.52-53.22,56.63c-4.38,0.99-7.36-0.31-8.22-3.58c-0.96-3.62,0.97-6.22,5.45-7.37\n\t\tc31.45-8.05,50.43-37.31,44.79-69.05c-5.39-30.37-33.96-51.25-65.52-47.89c-33.23,3.53-57.71,35.91-51.54,68.71\n\t\tc4.74,25.21,19.97,41.12,44.56,48.16c4.25,1.22,6.07,3.75,5.17,7.22c-0.83,3.22-3.79,4.64-7.77,3.74\n\t\tc-26.51-6.03-48.53-29.27-52.82-56.07c-0.51-3.15-1.72-3.73-4.55-3.68c-9.48,0.16-18.97,0.26-28.44-0.03\n\t\tc-4.23-0.13-6.26,1.37-7.54,5.36c-6.62,20.63-13.47,41.19-20.23,61.77c-2.13,6.49-4.26,12.98-6.55,19.97c1.68,0,2.89,0,4.1,0\n\t\tc10.35,0,20.71,0.03,31.06-0.01c7.35-0.03,12.58,3.11,15.76,9.84c4.05,8.56,8.36,16.99,12.43,25.54c1.23,2.6,2.95,3.64,5.83,3.64\n\t\tc45.04-0.06,90.07-0.06,135.11,0.01c3.05,0,4.79-1.14,6.06-3.87c3.65-7.78,7.79-15.34,11.19-23.22\n\t\tc3.76-8.71,9.98-12.36,19.38-12.01c10.69,0.4,21.41,0.09,32.67,0.09c-2.5-7.62-4.86-14.8-7.22-21.98\n\t\tc-6.57-19.99-13.13-39.99-19.72-59.97c-0.73-2.21-1.21-4.95-4.27-4.97C279.58,183.5,267.87,183.55,256.02,183.55z M65.76,126.46\n\t\tc-4.28-0.95-5.64,1.35-6.68,4.52c-14.88,45.3-29.81,90.59-44.72,135.88c-0.36,1.1-0.6,2.24-0.98,3.66c7.13,0,13.73-0.14,20.33,0.07\n\t\tc2.6,0.08,3.66-0.79,4.45-3.21c8.87-27.22,17.88-54.4,26.78-81.62c0.57-1.74,0.79-3.66,0.8-5.49c0.06-16.71,0.03-33.43,0.03-50.14\n\t\tC65.76,128.91,65.76,127.69,65.76,126.46z M256.43,172.1c12.92,0,25.33,0,37.67,0c0-15.39,0-30.54,0-45.74\n\t\tc-18.77,0-37.26,0-56.44,0C249.41,139.66,255.62,154.67,256.43,172.1z M114.93,172.19c0.8-17.51,7.08-32.58,18.76-45.85\n\t\tc-19.34,0-37.84,0-56.48,0c0,15.4,0,30.55,0,45.85C89.74,172.19,102.05,172.19,114.93,172.19z"},"child":[]},{"tag":"path","attr":{"d":"M69.47,59.9c-0.09-14.18,11.33-25.78,25.45-25.86c13.91-0.08,25.54,11.38,25.67,25.3c0.13,14.21-11.16,25.83-25.3,26.04\n\t\tC81.26,85.6,69.55,74.05,69.47,59.9z M80.69,59.63c-0.04,8.02,6.5,14.61,14.43,14.53c7.82-0.08,14.22-6.53,14.25-14.36\n\t\tc0.03-8.01-6.52-14.6-14.45-14.53C87.09,45.35,80.73,51.77,80.69,59.63z"},"child":[]},{"tag":"path","attr":{"d":"M215.51,28.97c-0.06-12.03,9.48-21.62,21.48-21.59c11.86,0.03,21.34,9.49,21.39,21.32c0.04,11.99-9.56,21.67-21.49,21.64\n\t\tC225.09,50.32,215.57,40.79,215.51,28.97z M236.81,39.1c5.61,0.07,10.26-4.49,10.32-10.13c0.06-5.72-4.37-10.26-10.07-10.32\n\t\tc-5.73-0.07-10.25,4.35-10.31,10.07C226.7,34.41,231.17,39.02,236.81,39.1z"},"child":[]},{"tag":"path","attr":{"d":"M147.49,22.59c-3.81,2.5-6.86,9.46-12.3,4.03c-5.49-5.48,1.62-8.45,4.05-12.28c-2.41-3.84-9.52-6.79-4.07-12.28\n\t\tc5.47-5.5,8.46,1.52,12.32,4.02c3.81-2.37,6.77-9.51,12.25-4.1c5.49,5.42-1.36,8.5-4,12.29c2.38,3.85,9.51,6.82,4.08,12.3\n\t\tC154.38,32.07,151.33,25.1,147.49,22.59z"},"child":[]},{"tag":"path","attr":{"d":"M273.81,60.66c3.46-1.9,6.42-3.77,9.61-5.11c0.84-0.35,2.81,0.64,3.52,1.58c4.45,5.89-1.48,8.47-4.26,12.22\n\t\tc2.44,3.85,9.63,7.03,3.93,12.48c-5.28,5.05-8.35-1.46-12.11-4.2c-3.82,2.44-6.52,9.2-12.55,4.04c-2.94-2.52-1.88-5.18,4.29-12.19\n\t\tc-2.36-3.82-9.2-6.48-4.08-12.54C264.64,53.99,267.33,55.04,273.81,60.66z"},"child":[]},{"tag":"path","attr":{"d":"M44.24,340.01c-2.99,0-5.97,0.05-8.96-0.01c-3.99-0.08-6.49-2.33-6.44-5.69c0.05-3.23,2.46-5.45,6.24-5.49\n\t\tc6.47-0.07,12.94-0.08,19.4,0.01c3.7,0.05,6.16,2.47,6.1,5.66c-0.06,3.19-2.53,5.37-6.27,5.52c-0.12,0.01-0.25,0-0.37,0\n\t\tC50.7,340.01,47.47,340.01,44.24,340.01z"},"child":[]},{"tag":"path","attr":{"d":"M44.82,357.47c-3.36,0.01-6.71,0.1-10.06-0.02c-3.6-0.13-5.83-2.28-5.89-5.4c-0.06-3.1,2.16-5.6,5.66-5.68\n\t\tc6.83-0.17,13.67-0.18,20.5,0.01c3.41,0.09,5.71,2.79,5.56,5.8c-0.15,2.92-2.4,5.12-5.69,5.26\n\t\tC51.53,357.58,48.17,357.47,44.82,357.47z"},"child":[]},{"tag":"path","attr":{"d":"M166.31,83.42c-0.97,1.11-2.11,3.58-3.79,4.02c-1.87,0.49-5.21-0.16-6.2-1.54c-3.62-5.03-6.68-10.5-9.66-15.96\n\t\tc-1.39-2.55-0.2-4.91,2.07-6.5c2.35-1.64,5.23-1.64,6.75,0.61c3.75,5.55,6.98,11.46,10.4,17.23\n\t\tC166.05,81.6,166.03,82.02,166.31,83.42z"},"child":[]},{"tag":"path","attr":{"d":"M211.36,88.35c-4.92,0.18-8.02-4.1-6.09-7.76c2.84-5.38,6.09-10.58,9.48-15.64c1.76-2.64,4.64-2.92,7.29-1.23\n\t\tc2.67,1.7,3.46,4.36,1.89,7.15c-2.88,5.09-5.9,10.12-9.12,14.99C213.95,87.16,212.12,87.82,211.36,88.35z"},"child":[]},{"tag":"path","attr":{"d":"M190.96,66.9c0,2.87,0.11,5.74-0.03,8.6c-0.16,3.23-2.48,5.48-5.45,5.52c-2.95,0.05-5.54-2.14-5.64-5.34\n\t\tc-0.18-5.73-0.17-11.47,0.04-17.2c0.12-3.27,2.6-5.31,5.65-5.27c3.08,0.04,5.27,2.15,5.43,5.46c0.13,2.74,0.03,5.48,0.03,8.22\n\t\tC190.98,66.9,190.97,66.9,190.96,66.9z"},"child":[]},{"tag":"path","attr":{"d":"M184.75,183.46c6.19-0.09,11.81,1.63,16.71,5.45c3.04,2.37,3.62,5.46,1.68,8.15c-1.91,2.65-5.06,3.04-8.25,0.88\n\t\tc-6.63-4.47-13.22-4.47-19.88-0.09c-3.28,2.16-6.3,1.81-8.25-0.85c-2.04-2.79-1.36-5.91,1.93-8.37\n\t\tC173.44,185.09,178.82,183.41,184.75,183.46z"},"child":[]},{"tag":"path","attr":{"d":"M216.78,162.42c3.01,0.05,5.48,2.46,5.53,5.41c0.05,3.09-2.59,5.71-5.71,5.65c-3.16-0.06-5.62-2.68-5.48-5.84\n\t\tC211.27,164.61,213.69,162.36,216.78,162.42z"},"child":[]},{"tag":"path","attr":{"d":"M154.8,162.42c3.08,0.04,5.42,2.36,5.47,5.4c0.05,3.19-2.46,5.72-5.63,5.66c-2.96-0.05-5.47-2.53-5.54-5.46\n\t\tC149.03,164.93,151.62,162.38,154.8,162.42z"},"child":[]}]}]};
const emptyInbox = GenIcon(emptyInboxJson)
export const EmptyInboxIcon = props => emptyInbox(props);

const brokenJarJson = {"tag":"svg","attr":{"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 233.24 316.78","style":"enable-background:new 0 0 233.24 316.78;"},"child":[{"tag":"path","attr":{"d":"M213.88,54.11c2.76,2.94,5.02,5.58,7.51,7.96c4.44,4.25,8.65,8.69,10.18,14.82c0.89,3.6,1.51,7.37,1.52,11.07\n\tc0.1,32.91,0.22,145.83-0.08,178.74c-0.12,13.58-5.84,25.11-15.45,34.67c-8.1,8.05-17.7,13.18-29.08,14.74\n\tc-2.88,0.4-5.81,0.6-8.71,0.61c-42.25,0.04-84.49-0.08-126.74,0.07c-24.3,0.08-43.28-15.23-50.09-35.48\n\tc-1.77-5.27-2.75-11.05-2.79-16.61c-0.23-33.08-0.14-146.16-0.03-179.24c0.03-8.08,3.01-15.06,8.84-20.79\n\tc3.03-2.98,5.91-6.09,8.84-9.17c0.33-0.35,0.5-0.84,0.81-1.37c-2.38-0.54-4.67-0.85-6.81-1.58C5.14,50.27,0.37,43.96,0.13,36.92\n\tc-0.2-5.91-0.11-11.83-0.1-17.75C0.06,7.9,7.3,0.45,18.6,0.03c0.5-0.02,1-0.01,1.5-0.01c64.41,0,128.82,0.02,193.24-0.03\n\tc8.17-0.01,14.44,3.1,18.03,10.53c1.12,2.31,1.6,5.1,1.71,7.69c0.25,5.74,0.15,11.5,0.06,17.25c-0.15,9.71-6.35,16.67-15.93,18.05\n\tC216.39,53.64,215.57,53.81,213.88,54.11z M37.39,54.77c-1.26,5.32-4.05,10.82-7.79,14.74c-1.78,1.86-3.72,3.58-5.63,5.32\n\tc-4.18,3.82-6.03,8.41-6.01,14.18c0.15,31.5,0.07,142.99,0.08,174.49c0,1.91-0.08,3.86,0.22,5.74\n\tc2.82,17.51,17.05,29.63,34.81,29.64c42.25,0.02,84.49,0.02,126.74-0.03c2.73,0,5.52-0.23,8.17-0.85\n\tc16.6-3.88,27.21-17.1,27.29-34.47c0.15-31.58,0.01-143.16,0.07-174.74c0.01-5.54-1.99-9.99-6.09-13.66\n\tc-6.53-5.83-12.44-12.12-14.2-21.31 M215.22,18.04c-65.81,0-131.4,0-197.03,0c0,5.95,0,11.73,0,17.61c65.74,0,131.33,0,197.03,0\n\tC215.22,29.74,215.22,24.01,215.22,18.04z"},"child":[]},{"tag":"path","attr":{"d":"M110.8,219.53c-2.72,0-5.37-1.39-6.87-3.89c-2.27-3.79-1.04-8.7,2.75-10.97l51.94-31.12l-10.04-15.4\n\tc-1.27-1.95-1.63-4.35-0.99-6.59c0.64-2.23,2.23-4.08,4.34-5.05l69.72-32.13c4.01-1.85,10.71,12.68,6.7,14.53l-61.31,28.25\n\tl9.52,14.6c1.19,1.82,1.58,4.05,1.1,6.17c-0.49,2.12-1.82,3.95-3.68,5.07l-59.07,35.39C113.62,219.16,112.2,219.53,110.8,219.53z"},"child":[]},{"tag":"path","attr":{"d":"M65.28,247.21c-2.71,0-5.36-1.38-6.86-3.87c-2.28-3.79-1.06-8.7,2.72-10.98l24.5-14.76c3.78-2.28,8.7-1.06,10.98,2.72\n\tc2.28,3.79,1.06,8.7-2.72,10.98l-24.5,14.76C68.1,246.84,66.68,247.21,65.28,247.21z"},"child":[]}]};
const brokenJar = GenIcon(brokenJarJson)
export const BrokenJar = props => brokenJar(props);
