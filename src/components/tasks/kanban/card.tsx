import { User } from '@/graphql/schema.types'
import { Text } from '@/text'
import { DeleteOutlined, EyeOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Dropdown, MenuProps, theme } from 'antd'
import React, { useMemo } from 'react'

type ProjectCardProps = {
    id: string,
    title: string,
    updateAt: string,
    dueDate?: string,
    users?: {
        id: string,
        name: string,
        avatarUrl?: User['avatarUrl']
    }[]
}

const ProjectCard = ({ id, title, dueDate, users }: ProjectCardProps) => 
{
  const  { token }  = theme.useToken();

  const edit = () => {}

  const dropdownItems = useMemo(() => {
    const dropdownItems: MenuProps['items'] = [
        {
            label: 'View Card',
            key: '1',
            icon: <EyeOutlined />,
            onClick: () => {
                edit()
            }
        },
        {
            danger: true,
            label: 'Delete Card',
            key: '2',
            icon: <DeleteOutlined />,
            onClick: () => {}
        }
    ]

    return dropdownItems
  }, [])
  
  return (
    <ConfigProvider
        theme={{
            components: {
                Tag: {
                    colorText: token.colorTextSecondary,
                },
                Card: {
                    headerBg: 'Transparent'
                }
            }
        }}
    >
        <Card
            size='small'
            title={<Text ellipsis={{tooltip: title}}></Text>}
            onClick={() => edit()}
            extra={
                <Dropdown
                    trigger={["click"]}
                    menu={{
                        items: dropdownItems,
                    }}
                    placement='bottom'
                    arrow={{ pointAtCenter: true}}
                >
                    <Button
                        type= "text"
                        shape='circle'
                        icon={
                            <MoreOutlined 
                                style={{
                                    transform: 'rotate(90deg)'
                                }}
                            />
                        }
                        onPointerDown={(e) => {
                            e.stopPropagation()
                        }}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    />                    
                </Dropdown>
            }
        >
            <div>
                
            </div>
        </Card>
    </ConfigProvider>
  )
}

export default ProjectCard