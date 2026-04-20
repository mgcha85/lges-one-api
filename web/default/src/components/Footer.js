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
        <div style={{ color: 'var(--grey-700)', fontSize: '13px', marginBottom: '15px' }}>
          <span style={{ margin: '0 10px', cursor: 'pointer' }}>이용약관</span> |
          <span style={{ margin: '0 10px', cursor: 'pointer', fontWeight: 'bold' }}>개인정보처리방침</span> |
          <span style={{ margin: '0 10px', cursor: 'pointer' }}>환불/취소 정책</span>
        </div>
        <div style={{ color: 'var(--grey-500)', fontSize: '12px', lineHeight: '1.8' }}>
          상호명: 차데이터리서치 | 대표자: 차민규 | 사업자등록번호: 219-03-78291 | 통신판매업 신고번호: 제 2021-평택안출-0261호<br />
          주소: 경기도 평택시 도대길 100-13
        </div>
        <div style={{ marginTop: '20px', color: 'var(--grey-400)', fontSize: '12px' }}>
          © {new Date().getFullYear()} {systemName}. All rights reserved.
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
