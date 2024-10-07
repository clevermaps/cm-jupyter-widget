import setuptools

setuptools.setup(
    name="clevermaps-jupyter-widget",
    version="0.0.1",
    author="Karel Psota",
    author_email="karel.psota@clevermaps.io",
    description="CleverMaps Jupyter widget",
    packages=setuptools.find_packages(),
    install_requires=[
	'anywidget'
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.10',
)
