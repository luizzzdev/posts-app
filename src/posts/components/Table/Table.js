import React from 'react';
import Table from '../../../shared/components/UI/Table/table';

const PostsTable = ({ posts }) => {
  const columns = [
    {
      prop: 'id',
      label: 'Id',
    },
    {
      prop: 'type',
      label: 'Tipo',
    },
    {
      prop: 'title',
      label: 'Titulo',
    },
  ];

  return <Table data={posts} columns={columns} />;
};

export default PostsTable;
