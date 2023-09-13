import React from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from '@ant-design/icons';

import { Button, Dropdown, Space } from 'antd';

import { useGlobalStore } from "~/stores";

import './index.modules.less'


const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];

const LayoutHeader = () => {
  const collapsed = useGlobalStore(state => state.collapsed);
  const setCollapsed = useGlobalStore(state => state.setCollapsed);

  return (
    <div className="flx-justify-between">
      <div>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed()}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </div>
      <div className='right-menu'>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default LayoutHeader
