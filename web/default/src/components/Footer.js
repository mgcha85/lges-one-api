import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Segment } from 'semantic-ui-react';
import { getFooterHTML, getSystemName } from '../helpers';

const Footer = () => {
  const { t } = useTranslation();
  const systemName = getSystemName();
  const [footer, setFooter] = useState(getFooterHTML());
  let remainCheckTimes = 5;

  const loadFooter = () => {
    let footer_html = localStorage.getItem('footer_html');
    if (footer_html) {
      setFooter(footer_html);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainCheckTimes <= 0) {
        clearInterval(timer);
        return;
      }
      remainCheckTimes--;
      loadFooter();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Segment vertical style={{ backgroundColor: 'var(--grey-50)', borderTop: '1px solid var(--grey-200)', marginTop: '40px', padding: '40px 0' }}>
      <Container textAlign='center'>
        <div style={{ color: 'var(--grey-400)', fontSize: '12px' }}>
          © {new Date().getFullYear()} {systemName}. All rights reserved.
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
