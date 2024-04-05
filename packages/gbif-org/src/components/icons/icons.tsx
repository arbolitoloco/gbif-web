import { GenIcon } from 'react-icons';

// https://github.com/react-icons/react-icons/issues/238
// SVJ => JSON using https://react-icons-json-generator.surge.sh/

const gbifLogoJson = {
  tag: 'svg',
  attr: { viewBox: '90 239.1 539.7 523.9' },
  child: [
    {
      tag: 'path',
      attr: { d: 'M325.5,495.4c0-89.7,43.8-167.4,174.2-167.4C499.6,417.9,440.5,495.4,325.5,495.4' },
      child: [],
    },
    {
      tag: 'path',
      attr: {
        d: 'M534.3,731c24.4,0,43.2-3.5,62.4-10.5c0-71-42.4-121.8-117.2-158.4c-57.2-28.7-127.7-43.6-192.1-43.6\n\tc28.2-84.6,7.6-189.7-19.7-247.4c-30.3,60.4-49.2,164-20.1,248.3c-57.1,4.2-102.4,29.1-121.6,61.9c-1.4,2.5-4.4,7.8-2.6,8.8\n\tc1.4,0.7,3.6-1.5,4.9-2.7c20.6-19.1,47.9-28.4,74.2-28.4c60.7,0,103.4,50.3,133.7,80.5C401.3,704.3,464.8,731.2,534.3,731',
      },
      child: [],
    },
  ],
};
const gbifLogo = GenIcon(gbifLogoJson);
export const GbifLogoIcon = (props: React.ComponentPropsWithoutRef<'svg'>): React.JSX.Element =>
  gbifLogo(props);

// logo by https://www.behance.net/boriskozelev via https://www.figma.com/file/3pI8j1ZGCBbrhD56LLQnRa/12-Empty-States-Icons-(Community)?type=design&node-id=0-1&mode=design
// TODO add to attribution file
export const NoResultsImage = (props: React.HTMLAttributes<HTMLOrSVGElement>) => (
  <svg
    {...props}
    width="250"
    height="200"
    viewBox="0 0 250 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M207 65C210.866 65 214 68.134 214 72C214 75.866 210.866 79 207 79H167C170.866 79 174 82.134 174 86C174 89.866 170.866 93 167 93H189C192.866 93 196 96.134 196 100C196 103.866 192.866 107 189 107H178.826C173.952 107 170 110.134 170 114C170 116.577 172 118.911 176 121C179.866 121 183 124.134 183 128C183 131.866 179.866 135 176 135H93C89.134 135 86 131.866 86 128C86 124.134 89.134 121 93 121H54C50.134 121 47 117.866 47 114C47 110.134 50.134 107 54 107H94C97.866 107 101 103.866 101 100C101 96.134 97.866 93 94 93H69C65.134 93 62 89.866 62 86C62 82.134 65.134 79 69 79H109C105.134 79 102 75.866 102 72C102 68.134 105.134 65 109 65H207ZM207 93C210.866 93 214 96.134 214 100C214 103.866 210.866 107 207 107C203.134 107 200 103.866 200 100C200 96.134 203.134 93 207 93Z"
      fill="#F3F7FF"
    />
    <path
      d="M120.5 133C139.002 133 154 118.002 154 99.5C154 80.9985 139.002 66 120.5 66C101.998 66 87 80.9985 87 99.5C87 118.002 101.998 133 120.5 133Z"
      fill="#F3F7FF"
      stroke="rgb(var(--color300))"
      stroke-width="2.5"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M115.132 125.494C116.891 125.819 118.68 125.987 120.5 126C135.136 126 147 114.136 147 99.5C147 84.8645 135.136 73 120.5 73C116.74 73 113.164 73.7829 109.924 75.1946C104.294 77.6479 99.6816 81.9999 96.896 87.4419C95.0445 91.0589 94 95.1575 94 99.5C94 103.44 94.8599 107.179 96.4021 110.54C97.5032 112.94 98.9521 115.146 100.684 117.096"
      fill="white"
    />
    <path
      d="M115.132 125.494C116.891 125.819 118.68 125.987 120.5 126C135.136 126 147 114.136 147 99.5C147 84.8645 135.136 73 120.5 73C116.74 73 113.164 73.7829 109.924 75.1946C104.294 77.6479 99.6816 81.9999 96.896 87.4419C95.0445 91.0589 94 95.1575 94 99.5C94 103.44 94.8599 107.179 96.4021 110.54C97.5032 112.94 98.9521 115.146 100.684 117.096"
      stroke="rgb(var(--color300))"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <path
      d="M103.797 120.075C105.946 121.821 108.372 123.237 111.001 124.247"
      stroke="rgb(var(--color300))"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <path d="M148 126L154 132" stroke="rgb(var(--color300))" stroke-width="2.5" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M153.03 131.03C151.138 132.923 151.138 135.992 153.03 137.884L164.116 148.97C166.008 150.862 169.077 150.862 170.97 148.97C172.862 147.077 172.862 144.008 170.97 142.116L159.884 131.03C157.992 129.138 154.923 129.138 153.03 131.03Z"
      fill="#E8F0FE"
      stroke="rgb(var(--color300))"
      stroke-width="2.5"
    />
    <path d="M158 133L169 144" stroke="white" stroke-width="2.5" stroke-linecap="round" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M114 88C114 99.598 123.402 109 135 109C137.278 109 139.472 108.637 141.526 107.966C138.173 116.287 130.023 122.161 120.5 122.161C107.985 122.161 97.8394 112.015 97.8394 99.5C97.8394 88.1596 106.17 78.7648 117.045 77.1011C115.113 80.2793 114 84.0097 114 88Z"
      fill="#E8F0FE"
    />
    <path
      d="M121 81C119.727 81 118.482 81.1253 117.279 81.3642M113.645 82.4761C106.804 85.3508 102 92.1144 102 100"
      stroke="rgb(var(--color200))"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <path
      d="M174.176 99.7773H166M180.5 92H163.324H180.5ZM187.5 92H185.279H187.5Z"
      stroke="rgb(var(--color200))"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M84.1758 121.777H76M79.5 113H62.3242H79.5ZM56.5 113H52.2788H56.5Z"
      stroke="rgb(var(--color200))"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
