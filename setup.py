from setuptools import setup

setup(
    name='ramen-site',
    author='jgo',
    packages=['src'],
    include_package_data=True,
    install_requires=[
        'flask',
    ],
)