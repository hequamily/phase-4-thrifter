"""first migration

Revision ID: a91915910979
Revises: 
Create Date: 2023-06-30 20:31:50.316293

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a91915910979'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('items',
    sa.Column('item_id', sa.Integer(), nullable=False),
    sa.Column('item_brand', sa.String(), nullable=True),
    sa.Column('item_description', sa.String(), nullable=True),
    sa.Column('item_img', sa.String(), nullable=True),
    sa.Column('item_price', sa.Integer(), nullable=True),
    sa.Column('item_size', sa.Text(), nullable=True),
    sa.Column('item_condition', sa.Text(), nullable=True),
    sa.Column('item_favorite', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('item_id')
    )
    op.create_table('users',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('user_name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('user_id')
    )
    op.create_table('orders',
    sa.Column('sale_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('item_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['item_id'], ['items.item_id'], name=op.f('fk_orders_item_id_items')),
    sa.ForeignKeyConstraint(['user_id'], ['users.user_id'], name=op.f('fk_orders_user_id_users')),
    sa.PrimaryKeyConstraint('sale_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('orders')
    op.drop_table('users')
    op.drop_table('items')
    # ### end Alembic commands ###
