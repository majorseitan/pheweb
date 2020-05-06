# to install: `pip install -e .` or `pip install .`
# to upload to pypi:
#     0. have a good `~/.pypirc`
#     1. set a new version in `pheweb/version.py`
#     2. `rm -r dist && python3 setup.py sdist bdist_wheel && twine upload dist/*`
# to upgrade: `pip3 install --upgrade --upgrade-strategy only-if-needed --no-cache-dir pheweb`
# to test: `python3 setup.py test`


from setuptools import setup
import imp
import os.path

version = imp.load_source('pheweb.version', os.path.join('pheweb', 'version.py')).version

setup(
    name='PheWeb',
    version=version,
    description="A tool for building PheWAS websites from association files",
    long_description='Please see the README `on github <https://github.com/statgen/pheweb>`__',
    author="Peter VandeHaar",
    author_email="pjvh@umich.edu",
    url="https://github.com/statgen/pheweb",
    license="MIT",
    classifiers=[
        'Programming Language :: Python :: 3 :: Only',
        'Operating System :: Unix',
        'License :: OSI Approved :: MIT License',
        'Intended Audience :: Science/Research',
        'Topic :: Scientific/Engineering :: Visualization',
        'Topic :: Scientific/Engineering :: Bio-Informatics',
        'Topic :: Internet :: WWW/HTTP :: WSGI :: Application',
    ],

    packages=['pheweb'],
    entry_points={'console_scripts': [
        'pheweb=pheweb.command_line:main',
        'detect-ref=pheweb.load.detect_ref:main',
    ]},
    # TODO: add test_suite (ie, make a single file that runs tests, figure out how to access input_data, make a data_dir in /tmp)
    include_package_data=True,
    zip_safe=False,
    cffi_modules=['pheweb/load/cffi/ffibuilder.py:ffibuilder'],
    setup_requires=[
        'cffi~=1.11',
        'pytest-runner~=4.0',
    ],
    install_requires=[
        'attrs (19.3.0)',
        'blist (1.3.6)',
        'boltons (18.0.1)',
        'cachetools (4.0.0)',
        'certifi (2019.9.11)',
        'cffi (1.13.1)',
        'chardet (3.0.4)',
        'Click (7.0)',
        'cryptography (2.8)',
        'data (0.4)',
        'decorator (4.4.0)',
        'distro (1.0.1)',
        'elasticsearch (6.2.0)',
        'et-xmlfile (1.0.1)',
        'Flask (1.1.1)',
        'Flask-Compress (1.4.0)',
        'Flask-Login (0.4.1)',
        'funcsigs (1.0.2)',
        'future (0.18.1)',
        'gevent (1.4.0)',
        'google-api-python-client (1.7.11)',
        'google-auth (1.11.2)',
        'google-auth-httplib2 (0.0.3)',
        'google-compute-engine (20190916.0)',
        'greenlet (0.4.15)',
        'gunicorn (19.9.0)',
        'httplib2 (0.17.0)',
        'idna (2.8)',
        'intervaltree (2.1.0)',
        'itsdangerous (1.1.0)',
        'jdcal (1.4.1)',
        'Jinja2 (2.10.3)',
        'keyring (10.1)',
        'keyrings.alt (1.3)',
        'latex (0.7.0)',
        'marisa-trie (0.7.5)',
        'MarkupSafe (1.1.1)',
        'numpy (1.17.3)',
        'openpyxl (2.6.4)',
        'pandas (0.24.2)',
        'PheWeb (1.0.0)',
        'pip (9.0.1)',
        'pyasn1 (0.4.8)',
        'pyasn1-modules (0.2.8)',
        'pycparser (2.19)',
        'pycrypto (2.6.1)',
        'pycurl (7.43.0)',
        'pygobject (3.22.0)',
        'Pympler (0.7)',
        'PyMySQL (0.9.3)',
        'pyOpenSSL (19.0.0)',
        'pysam (0.15.3)',
        'python-apt (1.4.1)',
        'python-dateutil (2.8.0)',
        'pytz (2019.3)',
        'pyxdg (0.25)',
        'rauth (0.7.3)',
        'requests (2.22.0)',
        'rsa (4.0)',
        'scipy (1.3.1)',
        'SecretStorage (2.3.1)',
        'setuptools (45.2.0)',
        'shutilwhich (1.1.0)',
        'six (1.12.0)',
        'sortedcontainers (2.1.0)',
        'tempdir (0.7.1)',
        'tqdm (4.36.1)',
        'unattended-upgrades (0.1)',
        'uritemplate (3.0.1)',
        'urllib3 (1.22)',
        'Werkzeug (0.16.0)',
        'wget (3.2)',
        'wheel (0.29.0)'
    ],
    tests_require=[
        'pytest~=3.4',
    ],
)
